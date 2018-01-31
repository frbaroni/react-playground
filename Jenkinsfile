node {
  stage('Node and NPM') {
    if (isUnix()) {
      sh "node --version"
        sh "npm --version"
        sh "ls -la"
    } else {
      echo "This pipeline is prepared for Unix systems"
        echo "Please update the pipeline script to use 'bat' instead of 'sh'!"
    }
  }

  stage('Fetch Code') {
    git 'https://github.com/frbaroni/react-playground/'
  }

  stage('Install') {
    sh "npm install"
  }

  stage('Checkstyle') {
    sh "./node_modules/eslint/bin/eslint.js -c .eslintrc.json -f checkstyle src/**/*.js > eslint.checkstyle.xml || true"
      checkstyle canComputeNew: false, canRunOnFailed: true, defaultEncoding: '', healthy: '', pattern: 'eslint.checkstyle.xml', unHealthy: ''
  }

  stage('Build') {
    sh "npm run build"
  }

  stage('Archive') {
    archiveArtifacts artifacts: 'build/**/*', onlyIfSuccessful: true
  }
}
