# CAN CLI

懒人开发，由于 `c` 在键盘上按起来比较顺手，所以用 `c`，该脚手架基于 `https://github.com/hacxy/cli-tsup-template` 该模板进行开发

[脚手架例子](https://github.com/acanowl/acanowl-framework/blob/master/packages/cli/README.md#example-%E7%94%A8%E6%B3%95)

This is a Nodejs CLI application that uses TypeScript as the development language and tsup as the build tool.

这是一个 Nodejs CLI 应用程序, 它使用了 typescript 作为开发语言, tsup 作为构建工具

## Prerequisites 先决条件

Requires Node.js version 18+ or 20+.

需要 Node.js 版本 18+、20+

### Install Dependencies 安装依赖

```sh
npm install
```

### Development 开发

- Development mode: This will enable `watch` mode to rebuild code and output `sourcemap` files for debugging.

- 开发模式: 这将启用 `watch` 模式对代码重新构建, 并输出用于 debug 的 `sourcemap` 文件

```sh
npm run dev
```

- Build production environment code

- 构建生产环境代码

```sh
npm run build
```

- Type check

- 类型检查

```sh
npm run typecheck
```

### Global Link Package 全局链接包

You can also establish a global link for this package so that you can test or debug code with real environments easily:

您还可以为这个包建立一个全局链接, 方便您使用真实环境来测试或者调试代码:

```sh
npm link
```

Afterwards, you can execute command `cli-name` at any path under all terminals of your operating system. This command corresponds to value of option "bin" in file `package.json`.

When you no longer need this global link, you can manually remove it by executing in root directory of your project:

之后您就可以在您的操作系统的所有终端下任意路径下去执行命令: `cli-name`, 这个命令对应的是该项目下的 `package.json` 文件中 `bin` 选项的值.

当您不再需要这个全局链接时, 您可以手动移除它, 在项目根目录中执行:

```sh
npm unlink -g
```

### Dependency Description 依赖性说明

If your third-party library is installed with DevDependencies during development time，executing `npm run build` will pack these dependencies into production environment codes.If program works abnormally after installing via this method,you should try installing them as production environment dependencies(Dependencies). When they are installed as production environment dependencies ,they won't be packed into production environment codes .

当您的第三方库以开发时依赖 (DevDependencies) 进行安装时, 执行`npm run build` 会将这些依赖打包进生产环境代码中, 如果您使用此方式安装并构建完成后, 发现程序工作异常, 则应该尝试将其作为生产环境依赖 (Dependencies) 进行安装, 当作为生产环境依赖进行安装时, 它们不会被打包进生产环境代码中.

## Example 用法

### c ver [...nodeName] Check Dependent Version

| Label                     | Content                            |
| ------------------------- | ---------------------------------- |
| Check Dependent Version   | c ver                              |
|                           | c ver [nodeName]                   |
|                           | c ver [nodeName] [nodeName] ...    |
| View All Versions         | c ver -l                           |
|                           | c ver [nodeName] -l                |
|                           | c ver [nodeName] --list            |
| Update Dependent Registry | c ver -r                           |
|                           | c ver [nodeName] -r=[path]         |
|                           | c ver [nodeName] --registry=[path] |

### c command [instruction] Custom Instruction

| Label                               | Content                                    |
| ----------------------------------- | ------------------------------------------ |
| Create Custom Instruction           | c command                                  |
|                                     | c command [instruction]                    |
|                                     | c command [instruction] -c [command]       |
|                                     | c command [instruction] --create [command] |
| Delete Specified Custom Instruction | c command -d                               |
|                                     | c command --delete                         |
|                                     | c command [instruction] --delete           |
| Delete All Custom Instruction       | c command --delete-all                     |
| View All Custom Instruction         | c command -l                               |
|                                     | c command --list                           |
