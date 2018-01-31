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

  stage('Test') {
    sh "npm run test:ci || true"
      junit 'test/junit.xml'
  }

  stage('Code Coverage') {
    step([
        $class: 'CloverPublisher',
        cloverReportDir: 'test/coverage',
        cloverReportFileName: 'clover.xml',
        healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
        unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
        failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
    ])  
  }

  stage('Build') {
    sh "npm run build"
  }
}
