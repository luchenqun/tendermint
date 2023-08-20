(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{762:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docker-compose"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" Docker Compose")]),e._v(" "),o("p",[e._v("With Docker Compose, you can spin up local testnets with a single command.")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("ol",[o("li",[o("RouterLink",{attrs:{to:"/introduction/install.html"}},[e._v("Install tendermint")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install docker-compose"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),o("p",[e._v("Build the "),o("code",[e._v("tendermint")]),e._v(" binary and, optionally, the "),o("code",[e._v("tendermint/localnode")]),e._v("\ndocker image.")]),e._v(" "),o("p",[e._v("Note the binary will be mounted into the container so it can be updated without\nrebuilding the image.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBCdWlsZCB0aGUgbGludXggYmluYXJ5IGluIC4vYnVpbGQKbWFrZSBidWlsZC1saW51eAoKIyAob3B0aW9uYWxseSkgQnVpbGQgdGVuZGVybWludC9sb2NhbG5vZGUgaW1hZ2UKbWFrZSBidWlsZC1kb2NrZXItbG9jYWxub2RlCg=="}}),e._v(" "),o("h2",{attrs:{id:"run-a-testnet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-a-testnet"}},[e._v("#")]),e._v(" Run a testnet")]),e._v(" "),o("p",[e._v("To start a 4 node testnet run:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBsb2NhbG5ldC1zdGFydAo="}}),e._v(" "),o("p",[e._v("The nodes bind their RPC servers to ports 26657, 26660, 26662, and 26664 on the\nhost.")]),e._v(" "),o("p",[e._v("This file creates a 4-node network using the localnode image.")]),e._v(" "),o("p",[e._v("The nodes of the network expose their P2P and RPC endpoints to the host machine\non ports 26656-26657, 26659-26660, 26661-26662, and 26663-26664 respectively.")]),e._v(" "),o("p",[e._v("To update the binary, just rebuild it and restart the nodes:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBidWlsZC1saW51eAptYWtlIGxvY2FsbmV0LXN0YXJ0Cg=="}}),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("make localnet-start")]),e._v(" creates files for a 4-node testnet in "),o("code",[e._v("./build")]),e._v(" by\ncalling the "),o("code",[e._v("tendermint testnet")]),e._v(" command.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("./build")]),e._v(" directory is mounted to the "),o("code",[e._v("/tendermint")]),e._v(" mount point to attach\nthe binary and config files to the container.")]),e._v(" "),o("p",[e._v("To change the number of validators / non-validators change the "),o("code",[e._v("localnet-start")]),e._v(" Makefile target "),o("a",{attrs:{href:"../../Makefile"}},[e._v("here")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"makefile",base64:"bG9jYWxuZXQtc3RhcnQ6IGxvY2FsbmV0LXN0b3AKICBAaWYgISBbIC1mIGJ1aWxkL25vZGUwL2NvbmZpZy9nZW5lc2lzLmpzb24gXTsgdGhlbiBkb2NrZXIgcnVuIC0tcm0gLXYgJChDVVJESVIpL2J1aWxkOi90ZW5kZXJtaW50OlogdGVuZGVybWludC9sb2NhbG5vZGUgdGVzdG5ldCAtLXYgNSAtLW4gMyAtLW8gLiAtLXBvcHVsYXRlLXBlcnNpc3RlbnQtcGVlcnMgLS1zdGFydGluZy1pcC1hZGRyZXNzIDE5Mi4xNjcuMTAuMiA7IGZpCiAgZG9ja2VyLWNvbXBvc2UgdXAK"}}),e._v(" "),o("p",[e._v("The command now will generate config files for 5 validators and 3\nnon-validators. Along with generating new config files the docker-compose file needs to be edited.\nAdding 4 more nodes is required in order to fully utilize the config files that were generated.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"ICBub2RlMzogIyBidW1wIGJ5IDEgZm9yIGV2ZXJ5IG5vZGUKICAgIGNvbnRhaW5lcl9uYW1lOiBub2RlMyAjIGJ1bXAgYnkgMSBmb3IgZXZlcnkgbm9kZQogICAgaW1hZ2U6ICZxdW90O3RlbmRlcm1pbnQvbG9jYWxub2RlJnF1b3Q7CiAgICBlbnZpcm9ubWVudDoKICAgICAgLSBJRD0zCiAgICAgIC0gTE9HPSR7TE9HOi10ZW5kZXJtaW50LmxvZ30KICAgIHBvcnRzOgogICAgICAtICZxdW90OzI2NjYzLTI2NjY0OjI2NjU2LTI2NjU3JnF1b3Q7ICMgQnVtcCAyNjY2My0yNjY2NCBieSBvbmUgZm9yIGV2ZXJ5IG5vZGUKICAgIHZvbHVtZXM6CiAgICAgIC0gLi9idWlsZDovdGVuZGVybWludDpaCiAgICBuZXR3b3JrczoKICAgICAgbG9jYWxuZXQ6CiAgICAgICAgaXB2NF9hZGRyZXNzOiAxOTIuMTY3LjEwLjUgIyBidW1wIHRoZSBmaW5hbCBkaWdpdCBieSAxIGZvciBldmVyeSBub2RlCg=="}}),e._v(" "),o("p",[e._v("Before running it, don't forget to cleanup the old files:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"IyBDbGVhciB0aGUgYnVpbGQgZm9sZGVyCnJtIC1yZiAuL2J1aWxkL25vZGUqCg=="}}),e._v(" "),o("h2",{attrs:{id:"configuring-abci-containers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-abci-containers"}},[e._v("#")]),e._v(" Configuring ABCI containers")]),e._v(" "),o("p",[e._v("To use your own ABCI applications with 4-node setup edit the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.34.x/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose.yaml"),o("OutboundLink")],1),e._v(" file and add image to your ABCI application.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"IGFiY2kwOgogICAgY29udGFpbmVyX25hbWU6IGFiY2kwCiAgICBpbWFnZTogJnF1b3Q7YWJjaS1pbWFnZSZxdW90OwogICAgYnVpbGQ6CiAgICAgIGNvbnRleHQ6IC4KICAgICAgZG9ja2VyZmlsZTogYWJjaS5Eb2NrZXJmaWxlCiAgICBjb21tYW5kOiAmbHQ7aW5zZXJ0IGNvbW1hbmQgdG8gcnVuIHlvdXIgYWJjaSBhcHBsaWNhdGlvbiZndDsKICAgIG5ldHdvcmtzOgogICAgICBsb2NhbG5ldDoKICAgICAgICBpcHY0X2FkZHJlc3M6IDE5Mi4xNjcuMTAuNgoKICBhYmNpMToKICAgIGNvbnRhaW5lcl9uYW1lOiBhYmNpMQogICAgaW1hZ2U6ICZxdW90O2FiY2ktaW1hZ2UmcXVvdDsKICAgIGJ1aWxkOgogICAgICBjb250ZXh0OiAuCiAgICAgIGRvY2tlcmZpbGU6IGFiY2kuRG9ja2VyZmlsZQogICAgY29tbWFuZDogJmx0O2luc2VydCBjb21tYW5kIHRvIHJ1biB5b3VyIGFiY2kgYXBwbGljYXRpb24mZ3Q7CiAgICBuZXR3b3JrczoKICAgICAgbG9jYWxuZXQ6CiAgICAgICAgaXB2NF9hZGRyZXNzOiAxOTIuMTY3LjEwLjcKCiAgYWJjaTI6CiAgICBjb250YWluZXJfbmFtZTogYWJjaTIKICAgIGltYWdlOiAmcXVvdDthYmNpLWltYWdlJnF1b3Q7CiAgICBidWlsZDoKICAgICAgY29udGV4dDogLgogICAgICBkb2NrZXJmaWxlOiBhYmNpLkRvY2tlcmZpbGUKICAgIGNvbW1hbmQ6ICZsdDtpbnNlcnQgY29tbWFuZCB0byBydW4geW91ciBhYmNpIGFwcGxpY2F0aW9uJmd0OwogICAgbmV0d29ya3M6CiAgICAgIGxvY2FsbmV0OgogICAgICAgIGlwdjRfYWRkcmVzczogMTkyLjE2Ny4xMC44CgogIGFiY2kzOgogICAgY29udGFpbmVyX25hbWU6IGFiY2kzCiAgICBpbWFnZTogJnF1b3Q7YWJjaS1pbWFnZSZxdW90OwogICAgYnVpbGQ6CiAgICAgIGNvbnRleHQ6IC4KICAgICAgZG9ja2VyZmlsZTogYWJjaS5Eb2NrZXJmaWxlCiAgICBjb21tYW5kOiAmbHQ7aW5zZXJ0IGNvbW1hbmQgdG8gcnVuIHlvdXIgYWJjaSBhcHBsaWNhdGlvbiZndDsKICAgIG5ldHdvcmtzOgogICAgICBsb2NhbG5ldDoKICAgICAgICBpcHY0X2FkZHJlc3M6IDE5Mi4xNjcuMTAuOQoK"}}),e._v(" "),o("p",[e._v("Override the "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.34.x/networks/local/localnode/Dockerfile#L12",target:"_blank",rel:"noopener noreferrer"}},[e._v("command"),o("OutboundLink")],1),e._v(" in each node to connect to it's ABCI.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yml",base64:"ICBub2RlMDoKICAgIGNvbnRhaW5lcl9uYW1lOiBub2RlMAogICAgaW1hZ2U6ICZxdW90O3RlbmRlcm1pbnQvbG9jYWxub2RlJnF1b3Q7CiAgICBwb3J0czoKICAgICAgLSAmcXVvdDsyNjY1Ni0yNjY1NzoyNjY1Ni0yNjY1NyZxdW90OwogICAgZW52aXJvbm1lbnQ6CiAgICAgIC0gSUQ9MAogICAgICAtIExPRz0kJHtMT0c6LXRlbmRlcm1pbnQubG9nfQogICAgdm9sdW1lczoKICAgICAgLSAuL2J1aWxkOi90ZW5kZXJtaW50OloKICAgIGNvbW1hbmQ6IG5vZGUgLS1wcm94eV9hcHA9dGNwOi8vYWJjaTA6MjY2NTgKICAgIG5ldHdvcmtzOgogICAgICBsb2NhbG5ldDoKICAgICAgICBpcHY0X2FkZHJlc3M6IDE5Mi4xNjcuMTAuMgo="}}),e._v(" "),o("p",[e._v("Similarly do for node1, node2 and node3 then "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.34.x/docs/networks/docker-compose.md#run-a-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("run testnet"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"logging"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),o("p",[e._v("Log is saved under the attached volume, in the "),o("code",[e._v("tendermint.log")]),e._v(" file. If the\n"),o("code",[e._v("LOG")]),e._v(" environment variable is set to "),o("code",[e._v("stdout")]),e._v(" at start, the log is not saved,\nbut printed on the screen.")]),e._v(" "),o("h2",{attrs:{id:"special-binaries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#special-binaries"}},[e._v("#")]),e._v(" Special binaries")]),e._v(" "),o("p",[e._v("If you have multiple binaries with different names, you can specify which one\nto run with the "),o("code",[e._v("BINARY")]),e._v(" environment variable. The path of the binary is relative\nto the attached volume.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);