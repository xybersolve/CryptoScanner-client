.PHONY: test builder app release

repo := 734741078887.dkr.ecr.us-west-2.amazonaws.com
app  := crypto-scanner
app_file := Dockerfile
builder := crypto-scanner-builder
builder_file := Dockerfile.builder
githash := $(shell git rev-parse HEAD)
builder_path := $(repo)/$(builder):$(githash)
app_path := $(repo)/$(app):$(githash)
# .SHELLSTATUS <- after shell call
test:
	@echo "test"

builder:
	@echo "Building builder image"
	@echo "-----------------------------------"
	@echo "Virtualenv activate"
	. ../bin/activate
	@echo "Login to ECS Registry"
	aws ecr get-login --no-include-email --region us-west-2 | bash
	@echo "Build builder image"
	#docker build -t "$(repo)/$(builder):$(githash)" -f "$(builder_file)" .
	docker build -t "$(builder_path)" -f "$(builder_file)" .
	@echo "Tag builder image"
	docker tag $(builder_path):$(builder_path) $(builder_path)
	@echo "Push builder image"
	docker push $(builder_path)

app:
	@echo "Building app image"
	@echo "-----------------------------------"
	@echo "Virtualenv activate"
	. ../bin/activate
	@echo "Login to ECS Registry"
	aws ecr get-login --no-include-email --region us-west-2 | bash
	@echo "Build app artifacts"
	# -rm: don't keep artifacts of the image itself, only the results
	docker run --rm -v "${PWD}:/work" \
		"${REPO}/${BUILDER}:${GIT_HASH}" \
		bash -c "cd /work; npm run build:prod"

release:
	echo "Release"
