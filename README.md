
## Build Setup

```bash
# 安装依赖
yarn

# 启动服务
yarn dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
yarn build:stage

# 构建生产环境
yarn build:prod
```

## 其它

```bash
# 预览发布环境效果
yarn preview

# 预览发布环境效果 + 静态资源分析
yarn preview -- --report

# 代码格式检查
yarn lint

# 代码格式检查并自动修复
yarn lint -- --fix
```