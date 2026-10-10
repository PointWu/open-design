# 当前项目为opendesign V0.24.1版本



# 一、同步更新代码
以后 0.24.2新版本 出来了怎么同步


## 1. 把原仓库加为"上游"（只需做一次）
git remote add upstream https://github.com/nexu-io/open-design.git

## 2. 拉取原仓库所有更新（含新 tag）
git fetch upstream --tags

## 3. 切回你的开发分支
git checkout dev

## 4. 把 0.24.2 合并进来
git merge open-design-v0.24.2

## 5. 有冲突就手动解决，然后推送
git push origin dev



# 二、项目启动

cd /Users/user/Documents/GitHub/open-design
PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin" pnpm tools-dev run web