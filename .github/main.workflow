workflow "publish on release" {
  on = "push"
  resolves = ["deps", "build", "publish"]
}

action "deps" {
  uses = "borales/actions-yarn@v2.3.0"
  args = "install"
}

action "build" {
  uses = "borales/actions-yarn@v2.3.0"
  args = "build"
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}