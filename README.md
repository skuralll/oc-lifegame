# オープンキャンパス展示用ライフゲーム

クライアント/サーバモデルのライフゲーム

### サーバ

OCaml (Dream)

### クライアント

TypeScript (React)

## 使用法

0. 前提条件

-   OCaml がインストールされていること
-   npm がインストールされていること

1. このリポジトリをクローンする

```sh
git clone git@github.com:skuralll/oc-lifegame.git
```

2. サーバサイド

```sh
cd oc-lifegame/lg_server
opam switch create . 5.1.0
eval $(opam env)
# 依存ライブラリのインストール
opam install dune dream ppx_yojson_conv
# サーバー起動(起動したらそのままにしておく)
cd src
dune exec main
```

3. クライアントサイド

```sh
cd oc-lifegame/lg_server
# 依存ライブラリのインストール
npm ci
# クライアント起動
npm run dev
```

CLI に表示される URL にアクセスすると、ライフゲームがプレイできます。
