node {
  def builder = docker.image('node:8-alpine')

  stage('Fetch') {
    checkout scm
  }

  stage('Install') {
    builder.inside {
      sh "npm install"
    }
  }

  stage('Checkstyle') {
    builder.inside {
      sh "npm run eslint:ci || true"
    }
    checkstyle canComputeNew: false, canRunOnFailed: true, defaultEncoding: '', healthy: '', pattern: 'ci/eslint.checkstyle.xml', unHealthy: ''
  }

  stage('Test') {
    builder.inside {
      sh "npm run test:ci || true"
    }
    junit 'ci/junit.xml'
      step([
          $class: 'CloverPublisher',
          cloverReportDir: 'ci/coverage',
          cloverReportFileName: 'clover.xml',
          healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
          unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
          failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
      ])  
  }

  stage('Build') {
    builder.inside {
      sh "npm run build --production"
      sh "cp Dockerfile build/"
    }
  }

  stage('Dockerize and publish') {
    docker.withRegistry('http://127.0.0.1:8082') {
      dir('build') {
        def prod = docker.build('frontend')
          prod.tag('${BUILD_ID}')
          prod.tag('latest')
          prod.push('${BUILD_ID}')
          prod.push('latest')
      }
    }
  }
}
