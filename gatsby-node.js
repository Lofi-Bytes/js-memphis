exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  if (page.path.match(/^\/donate/)) {
    deletePage(page)
  }
}
