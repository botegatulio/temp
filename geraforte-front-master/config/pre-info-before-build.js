/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-sync */

const fs = require('fs')
const axios = require('axios')
require('dotenv').config()

const API_HOST = process.env.GRAPHQL_HOST
const PATH_CONTENT_PRE_BUILD = 'src/content-pre-build'

if (!API_HOST) {
  throw new Error('Env GRAPHQL_HOST for content is not defined!')
}

function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file) => {
      const curPath = `${path}/${file}`

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })

    fs.rmdirSync(path)
  }
}

async function buildContent() {
  const [dialogContent, whatsAppContent] = await Promise.all([
    axios.get(`${API_HOST}/alert-modal`),
    axios.get(`${API_HOST}/whatsapp-modal`)
  ])

  Promise.all([
    fs.writeFileSync(
      `${PATH_CONTENT_PRE_BUILD}/dialog-alert.json`,
      JSON.stringify(dialogContent.data)
    ),
    fs.writeFileSync(
      `${PATH_CONTENT_PRE_BUILD}/whatsapp-modal.json`,
      JSON.stringify(whatsAppContent.data)
    )
  ])
}

async function deploy() {
  deleteFolderRecursive(PATH_CONTENT_PRE_BUILD)

  fs.mkdirSync(PATH_CONTENT_PRE_BUILD, 0o755)

  await buildContent()
}

deploy()
