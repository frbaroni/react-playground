node {
   stage('Node and NPM') {
      if (isUnix()) {
          sh "node --version"
          sh "npm --version"
          sh "ls -la"
      } else {
          bat "node --version"
          bat "npm --version"
          bat "dir"
      }
   }
   stage('Fetch Code') {
      git 'https://github.com/frbaroni/react-playground/'
   }
   stage('Build') {
      if (isUnix()) {
         sh "npm build ."
      } else {
         bat(/npm build ./)
      }
   }
   stage('Archive') {
      archiveArtifacts artifacts: 'public/*', onlyIfSuccessful: true
   }
}
