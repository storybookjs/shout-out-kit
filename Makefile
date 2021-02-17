install:
	cd image-component && npm i && npm run build && rm -rf node_modules
	cp _redirects image-component/storybook-static
	cd functions/shout-out-image && npm i
	cd functions/process-url && npm i
