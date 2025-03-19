# SnowFox (雪山飞狐) - 华人滑雪/户外俱乐部网站

## 项目简介
SnowFox 是一个现代化的华人滑雪和户外活动俱乐部网站，为会员提供活动发布、参与和管理功能。

## 功能特点
- 会员系统（普通会员/付费会员）
- 活动发布和管理
- 活动报名和参与
- 广告展示系统
- 响应式设计

## 技术栈
- 前端：React + TypeScript + Tailwind CSS
- 后端：Node.js + Express + TypeScript
- 数据库：MongoDB
- 认证：JWT

## 项目结构
```
snowfox/
├── client/                 # 前端 React 应用
│   ├── src/
│   │   ├── components/    # React 组件
│   │   ├── pages/        # 页面组件
│   │   ├── services/     # API 服务
│   │   └── utils/        # 工具函数
│   └── public/           # 静态资源
├── server/                # 后端 Node.js 应用
│   ├── src/
│   │   ├── controllers/  # 控制器
│   │   ├── models/      # 数据模型
│   │   ├── routes/      # 路由
│   │   └── utils/       # 工具函数
│   └── config/          # 配置文件
└── package.json
```

## 开发环境设置
1. 安装依赖
```bash
# 安装后端依赖
cd server
npm install

# 安装前端依赖
cd ../client
npm install
```

2. 环境变量配置
- 复制 `.env.example` 到 `.env` 并填写必要的环境变量

3. 启动开发服务器
```bash
# 启动后端服务器
cd server
npm run dev

# 启动前端开发服务器
cd client
npm start
```

## 部署
待补充

## 贡献指南
待补充 
