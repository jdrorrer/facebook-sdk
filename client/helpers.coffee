# global FB config
UI.registerHelper "fbConfig", () ->
  cfg = {colorscheme: "dark"}
  return cfg

UI.registerHelper "currentUrl", () ->
  ## this sometimes returns only the path
  # Router.current().url
  window.document.URL
