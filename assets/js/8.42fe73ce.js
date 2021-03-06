(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{206:function(v,_,i){"use strict";i.r(_);var l=i(28),n=Object(l.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"linux-基础"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础"}},[v._v("#")]),v._v(" Linux 基础")]),v._v(" "),i("h2",{attrs:{id:"概念"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),i("ul",[i("li",[v._v("Linux 指的是 Linux 内核 Linux Kernel")]),v._v(" "),i("li",[v._v("我们通常使用的是 Linux 发行版，在 Linux 内核基础上打包了一些应用软件和系统软件，形成了 Linux 操作系统。\n"),i("ul",[i("li",[v._v("常见的 Linux 发行版有 centos、ubuntu、redhat、debian、fedora")]),v._v(" "),i("li",[v._v("ubuntu 是在 debian 基础上做了一些优化和个性化的封装。")]),v._v(" "),i("li",[v._v("redhat 公司是商业公司，提供商业支持。开源了 redhat 源代码，centos 就是在 redhat 的基础上发展起来的。\ncentos 是 redhat 公司的社区支持版本。该公司资助了 fedora。")])])]),v._v(" "),i("li",[v._v("常用的虚拟机 vmware")])]),v._v(" "),i("h2",{attrs:{id:"常用软件安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常用软件安装"}},[v._v("#")]),v._v(" 常用软件安装")]),v._v(" "),i("ul",[i("li",[v._v("下载 wmware：window 下载 Workstation Pro、mac 下载 Fusion。")]),v._v(" "),i("li",[v._v("下载 centos：centos 作为服务器用 下载 minimal 版本 iso（常用的有 163、huaweicloud、aliyun 镜像）。内存配置 1G")]),v._v(" "),i("li",[v._v("下载 ubuntu：ubuntu 作为 window 开发环境，下载 Desktop LTS 版本。内存配置 2G ~ 4G")]),v._v(" "),i("li",[v._v("centos 下安装软件：yum；ubuntu 下安装软件：apt-get")])]),v._v(" "),i("h2",{attrs:{id:"常用-linux-命令总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常用-linux-命令总结"}},[v._v("#")]),v._v(" 常用 linux 命令总结")]),v._v(" "),i("ul",[i("li",[v._v("ssh 登录服务器：ssh user@ip 或者 ssh user@域名 （只是域名，不带协议，例如 ssh root@www.baidu.com）")]),v._v(" "),i("li",[v._v("su 切换用户：su user1")]),v._v(" "),i("li",[v._v("ls 列举目录\n"),i("ul",[i("li",[v._v("ls -l 长格式显示目录 = ll")]),v._v(" "),i("li",[v._v("ls -a 显示隐藏文件")]),v._v(" "),i("li",[v._v("ls -d 查看目录本身的属性")])])]),v._v(" "),i("li",[v._v("exit 退出当前登录")]),v._v(" "),i("li",[v._v("cat 查看文件内容\n"),i("ul",[i("li",[v._v("分页查看 cat file | more，然后按空格分页查看。")])])]),v._v(" "),i("li",[v._v("在 linux 里下载工具和软件包的命令\n"),i("ul",[i("li",[v._v("wget：支持 http 和 https 协议；wget 软件 url；断点续传下载 wget -c 软件 url")]),v._v(" "),i("li",[v._v("curl：支持 http https ftp 协议；例如 curl http://www.baidu.com 、curl http://www.baidu.com -o baidu.html")])])]),v._v(" "),i("li",[v._v("在 linux 里安装 yum install 例如：yum install wget")]),v._v(" "),i("li",[v._v("查看手册 man：man wget。")]),v._v(" "),i("li",[v._v("w / who：查看登录用户信息。")]),v._v(" "),i("li",[v._v("文件处理命令\n"),i("ul",[i("li",[v._v("mkdir：创建目录\n"),i("ul",[i("li",[v._v("mkdir -p 目录名：递归创建目录。")])])]),v._v(" "),i("li",[v._v("cd：切换目录\n"),i("ul",[i("li",[v._v("cd / 切换到根目录。")]),v._v(" "),i("li",[v._v("cd ~ 切换到用户目录。")])])]),v._v(" "),i("li",[v._v("pwd：查看当前目录")]),v._v(" "),i("li",[v._v("rmdir：删除目录")]),v._v(" "),i("li",[v._v("rm：删除目录或文件\n"),i("ul",[i("li",[v._v("-r 递归删除目录")]),v._v(" "),i("li",[v._v("-f 强制删除")])])]),v._v(" "),i("li",[v._v("cp：复制\n"),i("ul",[i("li",[v._v("cp 源文件或目录 目标文件")]),v._v(" "),i("li",[v._v("cp -r：递归复制")]),v._v(" "),i("li",[v._v("cp -d：若源文件是链接文件，则复制链接属性")]),v._v(" "),i("li",[v._v("cp -p：连带文件属性复制")]),v._v(" "),i("li",[v._v("cp -a：=== cp -rpd")])])]),v._v(" "),i("li",[v._v("mv：移动文件\n"),i("ul",[i("li",[v._v("mv 源文件或目录 目标文件")])])]),v._v(" "),i("li",[v._v("locate：在后台数据库按文件名搜索\n"),i("ul",[i("li",[v._v("数据保存在/var/lib/mlocate 后台数据库中，每天更新一次。")]),v._v(" "),i("li",[v._v("用 updatedb 命令立即更新。")]),v._v(" "),i("li",[v._v("速度比较快，只能搜索文件名。")])])]),v._v(" "),i("li",[v._v("whereis：搜素命令所在路径和帮助文件所在位置\n"),i("ul",[i("li",[v._v("-m：只搜索帮助文件")]),v._v(" "),i("li",[v._v("-b：只搜索可执行文件")])])]),v._v(" "),i("li",[v._v("which：搜索外部安装命令，无法查看 shell 自带的命令。")]),v._v(" "),i("li",[v._v("find：文件搜索命令\n"),i("ul",[i("li",[v._v("find 搜索范围 搜索条件")]),v._v(" "),i("li",[v._v("find -name：按照名字查找\n"),i("ul",[i("li",[v._v("find . -name a.txt")])])]),v._v(" "),i("li",[v._v("通配符查找\n"),i("ul",[i("li",[v._v("“*” 任意字符")]),v._v(" "),i("li",[v._v(". 任意一个字符")]),v._v(" "),i("li",[v._v("[] 中括号中的任意一个字符")])])]),v._v(" "),i("li",[v._v("i 不区分大小写查找")]),v._v(" "),i("li",[v._v("user 按照所有者查找")]),v._v(" "),i("li",[v._v("size 按照文件大小查找\n"),i("ul",[i("li",[v._v("+10k：大于 10k")]),v._v(" "),i("li",[v._v("10k：10k")]),v._v(" "),i("li",[v._v("-10k：小于 10k")]),v._v(" "),i("li",[v._v("find . -size +10k")])])]),v._v(" "),i("li",[v._v("修改时间查找\n"),i("ul",[i("li",[v._v("ctime：修改文件属性")]),v._v(" "),i("li",[v._v("atime：访问时间")]),v._v(" "),i("li",[v._v("mtime: 修改文件内容时间")]),v._v(" "),i("li",[v._v("10：10 天当天")]),v._v(" "),i("li",[v._v("+10：10 天之前")]),v._v(" "),i("li",[v._v("-10：10 天以内")]),v._v(" "),i("li",[v._v("find . -mtime 10")])])]),v._v(" "),i("li",[v._v("综合应用\n"),i("ul",[i("li",[v._v("a：and")]),v._v(" "),i("li",[v._v("o：or")]),v._v(" "),i("li",[v._v("not：非")]),v._v(" "),i("li",[v._v("find /tmp -size +10k -a -size -20k")])])])])]),v._v(" "),i("li",[v._v("grep：在文件中匹配符合条件的字符串\n"),i("ul",[i("li",[v._v("i：不区分大小写")])])]),v._v(" "),i("li",[v._v("压缩和解压命令\n"),i("ul",[i("li",[v._v("zip 格式\n"),i("ul",[i("li",[v._v("压缩文件：zip 压缩文件名 源文件")]),v._v(" "),i("li",[v._v("压缩目录：zip -r 压缩文件名 源目录")]),v._v(" "),i("li",[v._v("解压：unzip 压缩文件名")]),v._v(" "),i("li",[v._v("mkdir book; zip -r book.zip book")])])]),v._v(" "),i("li",[v._v("gzip 格式\n"),i("ul",[i("li",[v._v("gzip 源文件名：压缩源文件为.gz，同时删除源文件")]),v._v(" "),i("li",[v._v("gzip -d 压缩文件名（.gz）：解压缩文件，同时删除 .gz 压缩包")]),v._v(" "),i("li",[v._v("gunzip 压缩包（.gz）：解压缩文件，同时删除 .gz 压缩包")]),v._v(" "),i("li",[v._v("gzip -c 源文件名 > 压缩文件名（.gz）：压缩源文件，同时保留源文件")]),v._v(" "),i("li",[v._v("gzip -r 目录名：压缩目录里的文件，不压缩目录")]),v._v(" "),i("li",[v._v("压缩是压缩目录下的文件")])])]),v._v(" "),i("li",[v._v("bz2 格式\n"),i("ul",[i("li",[v._v("bzip2 源文件名：压缩源文件为 .bz2 格式，同时删除源文件")]),v._v(" "),i("li",[v._v("bunzip2 压缩包（.bz2）：解压缩文件")]),v._v(" "),i("li",[v._v("bzip2 -d 压缩包（.bz2）：解压缩文件")]),v._v(" "),i("li",[v._v("bzip2 -k 源文件：压缩源文件为 .bz2 格式，同时保留源文件")]),v._v(" "),i("li",[v._v("不能压缩目录")])])]),v._v(" "),i("li",[v._v("tar\n"),i("ul",[i("li",[v._v("打包命令")]),v._v(" "),i("li",[v._v("tar -cvf 打包文件名 源文件\n"),i("ul",[i("li",[v._v("c：打包")]),v._v(" "),i("li",[v._v("v：显示打包过程")]),v._v(" "),i("li",[v._v("f：指定打包后的文件名")]),v._v(" "),i("li",[v._v("x：解打包")])])]),v._v(" "),i("li",[v._v("tar -cvf a.txt.tar a.txt")]),v._v(" "),i("li",[v._v("tar -xvf a.txt.tar")])])])])])])])]),v._v(" "),i("h2",{attrs:{id:"常用-linux-终端快捷键"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#常用-linux-终端快捷键"}},[v._v("#")]),v._v(" 常用 Linux 终端快捷键")]),v._v(" "),i("ul",[i("li",[v._v("ctrl + s：冻结终端。")]),v._v(" "),i("li",[v._v("ctrl + q：解冻终端。")]),v._v(" "),i("li",[v._v("ctrl + c：强行终止。")]),v._v(" "),i("li",[v._v("ctrl + a / ctrl + e：光标移动到行首/行尾。")]),v._v(" "),i("li",[v._v("ctrl + d：退出 shell。")]),v._v(" "),i("li",[v._v("ctrl + l：清屏 == clear。")])]),v._v(" "),i("h2",{attrs:{id:"linux-目录介绍"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux-目录介绍"}},[v._v("#")]),v._v(" linux 目录介绍")]),v._v(" "),i("ul",[i("li",[i("p",[v._v("root 目录\nroot 用户的目录在 /root")])]),v._v(" "),i("li",[i("p",[v._v("boot 目录\n引导操作系统的配置文件和操作系统的内核")])]),v._v(" "),i("li",[i("p",[v._v("home 目录\nroot 用户的 home 目录在 root 目录下 /root，其他用户的目录在 /home/（/home/user1），每一个用户的 home 目录下\n都有一个 .bashrc 配置当前用户的环境变量")])]),v._v(" "),i("li",[i("p",[v._v("etc 目录\n存放程序和系统配置文件\n_ 不同配置文件 形式不同\n_ shadow：用户身份的配置文件\n_ nginx：/ect/nginx/nginx.conf\n_ .d：shell 脚本文件\n_ 用户目录 ~ 下 ls -a 也可以看到一些配置文件\n_ profile：全局配置环境变量，重启生效\n_ rc.d rc.local rc0.d ... ：操作系统在启动的时候要执行的脚本 用来拉起 一些服务\n_ “#!shell 解释器路径”：shell 脚本的第一行（#!/bin/bash 或者 #!/bin/sh）")])]),v._v(" "),i("li",[i("p",[v._v("var 目录")]),v._v(" "),i("ul",[i("li",[v._v("/var/log 目录\n存放 操作系统、服务和程序 默认日志文件。（例如 nginx、jenkins、mariadb、yum）")]),v._v(" "),i("li",[v._v("/var/www/html：apache 服务的默认网站根目录")])])]),v._v(" "),i("li",[i("p",[v._v("bin 目录\n存放的是二进制文件 常用的执行命令 是/usr/bin 的一个 软连接")])]),v._v(" "),i("li",[i("p",[v._v("media、mnt 目录\n挂载 外部存储设备（例如 u 盘） mnt 目录")])]),v._v(" "),i("li",[i("p",[v._v("temp 目录\n存放程序运行时产生的临时文件")])]),v._v(" "),i("li",[i("p",[v._v("run 目录\n存放程序运行时产生的临时文件和 pid 文件。")])]),v._v(" "),i("li",[i("p",[v._v("dev 目录\n硬件设备、虚拟设备，在 Linux 下 所有的设备都是文件。（打开一个终端，依赖的就是 tty）。")])]),v._v(" "),i("li",[i("p",[v._v("lib 目录\nlinux 的二进制库 * linux 下的二进制库有 .a .so .lib 文件")])]),v._v(" "),i("li",[i("p",[v._v("opt 目录\n空目录，用来放自己的程序")])]),v._v(" "),i("li",[i("p",[v._v("proc 目录\n在内存中 虚拟目录 操作系统运行的时候才出现的目录 存储 操作系统运行时所需要维护的数据。（例如 服务进程、cpu 信息、mem 信息）")])]),v._v(" "),i("li",[i("p",[v._v("usr 目录\n存放 常用的程序和库")])])])])}),[],!1,null,null,null);_.default=n.exports}}]);