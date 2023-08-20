(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{812:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-044-lite-client-with-weak-subjectivity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-044-lite-client-with-weak-subjectivity"}},[e._v("#")]),e._v(" ADR 044: Lite Client with Weak Subjectivity")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("13-07-2019: Initial draft")]),e._v(" "),n("li",[e._v("14-08-2019: Address cwgoes comments")])]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("The concept of light clients was introduced in the Bitcoin white paper. It\ndescribes a watcher of distributed consensus process that only validates the\nconsensus algorithm and not the state machine transactions within.")]),e._v(" "),n("p",[e._v("Tendermint light clients allow bandwidth & compute-constrained devices, such as smartphones, low-power embedded chips, or other blockchains to\nefficiently verify the consensus of a Tendermint blockchain. This forms the\nbasis of safe and efficient state synchronization for new network nodes and\ninter-blockchain communication (where a light client of one Tendermint instance\nruns in another chain's state machine).")]),e._v(" "),n("p",[e._v("In a network that is expected to reliably punish validators for misbehavior\nby slashing bonded stake and where the validator set changes\ninfrequently, clients can take advantage of this assumption to safely\nsynchronize a lite client without downloading the intervening headers.")]),e._v(" "),n("p",[e._v("Light clients (and full nodes) operating in the Proof Of Stake context need a\ntrusted block height from a trusted source that is no older than 1 unbonding\nwindow plus a configurable evidence submission synchrony bound. This is called “weak subjectivity”.")]),e._v(" "),n("p",[e._v("Weak subjectivity is required in Proof of Stake blockchains because it is\ncostless for an attacker to buy up voting keys that are no longer bonded and\nfork the network at some point in its prior history. See Vitalik’s post at\n"),n("a",{attrs:{href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proof of Stake: How I Learned to Love Weak\nSubjectivity"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Currently, Tendermint provides a lite client implementation in the\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/main/light",target:"_blank",rel:"noopener noreferrer"}},[e._v("light"),n("OutboundLink")],1),e._v(" package. This\nlite client implements a bisection algorithm that tries to use a binary search\nto find the minimum number of block headers where the validator set voting\npower changes are less than < 1/3rd. This interface does not support weak\nsubjectivity at this time. The Cosmos SDK also does not support counterfactual\nslashing, nor does the lite client have any capacity to report evidence making\nthese systems "),n("em",[e._v("theoretically unsafe")]),e._v(".")]),e._v(" "),n("p",[e._v("NOTE: Tendermint provides a somewhat different (stronger) light client model\nthan Bitcoin under eclipse, since the eclipsing node(s) can only fool the light\nclient if they have two-thirds of the private keys from the last root-of-trust.")]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("h3",{attrs:{id:"the-weak-subjectivity-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-weak-subjectivity-interface"}},[e._v("#")]),e._v(" The Weak Subjectivity Interface")]),e._v(" "),n("p",[e._v("Add the weak subjectivity interface for when a new light client connects to the\nnetwork or when a light client that has been offline for longer than the\nunbonding period connects to the network. Specifically, the node needs to\ninitialize the following structure before syncing from user input:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBUcnVzdE9wdGlvbnMgc3RydWN0IHsKICAgIC8vIFJlcXVpcmVkOiBvbmx5IHRydXN0IGNvbW1pdHMgdXAgdG8gdGhpcyBvbGQuCiAgICAvLyBTaG91bGQgYmUgZXF1YWwgdG8gdGhlIHVuYm9uZGluZyBwZXJpb2QgbWludXMgc29tZSBkZWx0YSBmb3IgZXZpZGVuY2UgcmVwb3J0aW5nLgogICAgVHJ1c3RQZXJpb2QgdGltZS5EdXJhdGlvbiBganNvbjomcXVvdDt0cnVzdC1wZXJpb2QmcXVvdDtgCgogICAgLy8gT3B0aW9uIDE6IFRydXN0SGVpZ2h0IGFuZCBUcnVzdEhhc2ggY2FuIGJvdGggYmUgcHJvdmlkZWQKICAgIC8vIHRvIGZvcmNlIHRoZSB0cnVzdGluZyBvZiBhIHBhcnRpY3VsYXIgaGVpZ2h0IGFuZCBoYXNoLgogICAgLy8gSWYgdGhlIGxhdGVzdCB0cnVzdGVkIGhlaWdodC9oYXNoIGlzIG1vcmUgcmVjZW50LCB0aGVuIHRoaXMgb3B0aW9uIGlzCiAgICAvLyBpZ25vcmVkLgogICAgVHJ1c3RIZWlnaHQgaW50NjQgIGBqc29uOiZxdW90O3RydXN0LWhlaWdodCZxdW90O2AKICAgIFRydXN0SGFzaCAgIFtdYnl0ZSBganNvbjomcXVvdDt0cnVzdC1oYXNoJnF1b3Q7YAoKICAgIC8vIE9wdGlvbiAyOiBDYWxsYmFjayBjYW4gYmUgc2V0IHRvIGltcGxlbWVudCBhIGNvbmZpcm1hdGlvbgogICAgLy8gc3RlcCBpZiB0aGUgdHJ1c3Qgc3RvcmUgaXMgdW5pbml0aWFsaXplZCwgb3IgZXhwaXJlZC4KICAgIENhbGxiYWNrIGZ1bmMoaGVpZ2h0IGludDY0LCBoYXNoIFtdYnl0ZSkgZXJyb3IKfQo="}}),e._v(" "),n("p",[e._v("The expectation is the user will get this information from a trusted source\nlike a validator, a friend, or a secure website. A more user friendly\nsolution with trust tradeoffs is that we establish an https based protocol with\na default end point that populates this information. Also an on-chain registry\nof roots-of-trust (e.g. on the Cosmos Hub) seems likely in the future.")]),e._v(" "),n("h3",{attrs:{id:"linear-verification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linear-verification"}},[e._v("#")]),e._v(" Linear Verification")]),e._v(" "),n("p",[e._v("The linear verification algorithm requires downloading all headers\nbetween the "),n("code",[e._v("TrustHeight")]),e._v(" and the "),n("code",[e._v("LatestHeight")]),e._v(". The lite client downloads the\nfull header for the provided "),n("code",[e._v("TrustHeight")]),e._v(" and then proceeds to download "),n("code",[e._v("N+1")]),e._v("\nheaders and applies the "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/main/spec/light-client/verification/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint validation\nrules"),n("OutboundLink")],1),e._v("\nto each block.")]),e._v(" "),n("h3",{attrs:{id:"bisecting-verification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bisecting-verification"}},[e._v("#")]),e._v(" Bisecting Verification")]),e._v(" "),n("p",[e._v("Bisecting Verification is a more bandwidth and compute intensive mechanism that\nin the most optimistic case requires a light client to only download two block\nheaders to come into synchronization.")]),e._v(" "),n("p",[e._v("The bisection algorithm proceeds in the following fashion. The client downloads\nand verifies the full block header for "),n("code",[e._v("TrustHeight")]),e._v(" and then  fetches\n"),n("code",[e._v("LatestHeight")]),e._v(" blocker header. The client then verifies the "),n("code",[e._v("LatestHeight")]),e._v("\nheader. Finally the client attempts to verify the "),n("code",[e._v("LatestHeight")]),e._v(" header with\nvoting powers taken from "),n("code",[e._v("NextValidatorSet")]),e._v(" in the "),n("code",[e._v("TrustHeight")]),e._v(" header. This\nverification will succeed if the validators from "),n("code",[e._v("TrustHeight")]),e._v(" still have > 2/3\n+1 of voting power in the "),n("code",[e._v("LatestHeight")]),e._v(". If this succeeds, the client is fully\nsynchronized. If this fails, then following Bisection Algorithm should be\nexecuted.")]),e._v(" "),n("p",[e._v("The Client tries to download the block at the mid-point block between\n"),n("code",[e._v("LatestHeight")]),e._v(" and "),n("code",[e._v("TrustHeight")]),e._v(" and attempts that same algorithm as above\nusing "),n("code",[e._v("MidPointHeight")]),e._v(" instead of "),n("code",[e._v("LatestHeight")]),e._v(" and a different threshold -\n1/3 +1 of voting power for "),n("em",[e._v("non-adjacent headers")]),e._v(". In the case the of failure,\nrecursively perform the "),n("code",[e._v("MidPoint")]),e._v(" verification until success then start over\nwith an updated "),n("code",[e._v("NextValidatorSet")]),e._v(" and "),n("code",[e._v("TrustHeight")]),e._v(".")]),e._v(" "),n("p",[e._v("If the client encounters a forged header, it should submit the header along\nwith some other intermediate headers as the evidence of misbehavior to other\nfull nodes. After that, it can retry the bisection using another full node. An\noptimal client will cache trusted headers from the previous run to minimize\nnetwork usage.")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("Check out the formal specification\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/main/spec/light-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Implemented")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("light client which is safe to use (it can go offline, but not for too long)")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("complexity of bisection")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("ul",[n("li",[e._v("social consensus can be prone to errors (for cases where a new light client\njoins a network or it has been offline for too long)")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);