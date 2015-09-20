{
  "baseUrl": "../../../src/modules",
  "include": ["object"],
  "out": "../../../dist/modules/object.js",
  "wrap": {
    "startFile": ["../../wrap.start", "wrap.start"],
    "endFile": "wrap.end"
  },
	"optimize": "none",
	"onModuleBundleComplete": function (data) {
		var fs = module.require('fs'),
			amdclean = module.require('amdclean'),
			outputFile = data.path,
			cleanedCode = amdclean.clean({
				'filePath': outputFile,
				transformAMDChecks: false
			});

		fs.writeFileSync(outputFile, cleanedCode);
	}
}