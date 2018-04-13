const path = require('path');
const fs = require('fs');
const utils = require('./utils');
let  join = require('path').join;
let buildEntries = {};

function findSync(startPath) {
    // let result=[];
    function finder(path) {
        let files=fs.readdirSync(path);
        files.forEach((val,index) => {
            let fPath=join(path,val);
            let stats=fs.statSync(fPath);
            if(stats.isDirectory()){
            	let nextfiles = fs.readdirSync(fPath);
            	let next_fPath = join(fPath,nextfiles[0]);
                let next_stats=fs.statSync(next_fPath);
                // console.log(next_stats.isFile());
            	if(next_stats.isFile() ){
            		//此层目录为目录且 下一层目录不为文件夹
            		// console.log(path);
            		// console.log(fPath);
	            	// result.push(val);
  					buildEntries[val] = join(fPath,'main.js');
            	}else{
            		finder(fPath);
            	}
            }
            // if(stats.isFile()) result.push(files);

        });
    }
    finder(startPath);
    // return result;
}
// let fileNames=findSync(path.join(utils.resolve('src'),'modules'));
findSync(path.join(utils.resolve('src'),'modules'));
// console.log(fileNames);


/*获取所有模块的文件夹名*/
// const modules = fs.readdirSync(path.join(utils.resolve('src'),'modules'));
// const modules = fs.readdirSync(path.join(utils.resolve('src'),'modules'));
// fs.readdirSync(path.join(utils.resolve('src'),'modules')).map(function (filename){
	// console.log(filename.isDirectory());
	// return filename + '::./' + path.join(entry, filename, 'main.js');
// });
// const modules = fs.readdirSync(path.join(path.join(__dirname, '..', 'src'),'modules',*));
// console.log(path.join(__dirname, '..', 'src'))
// path.join(__dirname, '..', dir)
// console.log(modules);
// utils.resolve('src')+'/modules/**/**/*.html'

// for (let moduleName of modules) {
//   buildEntries[moduleName] = path.join(utils.resolve('src'),'modules',moduleName,'main.js');
// }
// for (let moduleName of fileNames) {
// 	if(moduleName.indexOf('_')==-1){
//   		buildEntries[moduleName] = path.join(utils.resolve('src'),'modules',moduleName,'main.js');
// 	}else{
// 	  buildEntries[moduleName] = path.join(utils.resolve('src/modules'),moduleName,moduleName.substring(0,moduleName.indexOf('_')),'main.js');
// 	}
// }
// console.log(buildEntries);
module.exports = buildEntries;
