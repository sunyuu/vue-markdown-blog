# vue-markdown-blog

> 一个把markdown文件生成vue架构博客的项目

## Usage

``` bash
# install dependencies
npm install
```

在package.json中增加脚本

``` javascript
{
    "script": {
        "start": "node webpack.start",
        "build": "node webpack.build"
    }
}
```

``` bash
#本地测试
npm run start

#构建到dist目录
npm run build
```

