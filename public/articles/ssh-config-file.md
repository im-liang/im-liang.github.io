## File Location

user-specific file path: `~/.ssh/config`  
global file path: `/etc/ssh/ssh_config`  

## Set Up Default Key Pair

```
host *
 IdentityFile ~/.ssh/{{private key name}}
```

## Simplify command

```
host {{name}}
 HostName {{url || ip}}
 User {{username}}
 IdentityFile {{private key path}}
 Port {{port}}
```

after setting the host in config as above, you can use `ssh {{name}}` to ssh into the server, while without config, you have to type `ssh {{username}}@{{url || ip}} -p {{port}} -i {{private key path}}
