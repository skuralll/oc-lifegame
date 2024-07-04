# オープンキャンパス展示用ライフゲーム

クライアント/サーバモデルのライフゲーム

### サーバ

OCaml (Dream)

### クライアント

TypeScript (React)

## 使用法

1. このリポジトリをクローンする

```sh
git@github.com:skuralll/oc-lifegame.git
```

2. サーバサイド

```sh
# 依存ライブラリのインストール
cd oc-lifegame/lg_server
opam switch create . 5.1.0
eval $(opam env)
opam install dune dream ppx_yojson_conv
# サーバー起動
cd src
dune exec main
```
