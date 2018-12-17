Installing SSHFS

On Mac OSX

`brew install sshfs`


create a local directory in which to mount the remote file system

`sudo mkdir /your/dir`

mount the file system locally 

using password

`sudo sshfs -o allow_other,defer_permissions root@xxx.xxx.xxx.xxx:/ /your/dir`

using ssh key

`sudo sshfs -o allow_other,defer_permissions,IdentityFile=~/.ssh/id_rsa root@xxx.xxx.xxx.xxx:/ /your/dir`

Unmounting the Remote File System

`sudo umount /mnt/droplet`
