#!/usr/bin/env node

const { program } = require('commander')
const fs = require('fs-extra')
const path = require('path')
const appJsContent = require('./files/app')
const packageJsonContent = require('./files/package')
const routerIndexContent = require('./files/routerIndexContent')
const usersControllerContent = require('./files/usersControllerContent copy')

program.version('0.1.0')

const createProjectStructure = async projectPath => {
  await fs.ensureDir(path.join(projectPath, 'src'))
  await fs.ensureDir(path.join(projectPath, 'db'))

  await fs.ensureFile(path.join(projectPath, 'src', 'index.js'))
  await fs.ensureDir(path.join(projectPath, 'src', 'router'))
  await fs.ensureDir(path.join(projectPath, 'src', 'controllers'))
  await fs.ensureDir(path.join(projectPath, 'src', 'config'))

  await fs.ensureFile(path.join(projectPath, 'src', 'router', 'index.js'))
  await fs.ensureFile(path.join(projectPath, 'src', 'config', 'index.js'))
  await fs.ensureFile(path.join(projectPath, 'src', 'models', 'Users.js'))
  await fs.ensureFile(
    path.join(projectPath, 'src', 'controllers', 'users.controller.js')
  )

  await fs.writeJSON(
    path.join(projectPath, 'package.json'),
    packageJsonContent,
    { spaces: 2 }
  )
  await fs.writeFile(path.join(projectPath, 'src', 'app.js'), appJsContent)
  await fs.writeFile(
    path.join(projectPath, 'src', 'router', 'index.js'),
    routerIndexContent
  )
  await fs.writeFile(
    path.join(projectPath, 'src', 'controllers', 'users.controller.js'),
    usersControllerContent
  )
}

program
  .command('init <projectName>')
  .description('Estructura básica')
  .action(async projectName => {
    try {
      const projectPath = path.join(process.cwd(), projectName)
      await createProjectStructure(projectPath)

      console.log('Project created')
    } catch (error) {
      console.log(error)
    }
  })

program.parse(process.argv)
