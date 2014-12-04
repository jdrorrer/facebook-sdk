# global FB config 
UI.registerHelper "fbConfig", () ->
  cfg = {colorscheme: "dark"}
  return cfg

UI.registerHelper "currentUrl", () ->
  Router.current().url
