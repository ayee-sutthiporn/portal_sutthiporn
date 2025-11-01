pipeline {
  // Use any available agent (no Docker dependency)
  agent any

  options {
    timeout(time: 30, unit: 'MINUTES')
  }

  stages {
    stage('Checkout Code') {
      steps {
        echo '>>> Checking out code from SCM...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '>>> Installing dependencies (npm ci)...'
        script {
          if (isUnix()) {
            sh 'npm ci'
          } else {
            bat 'npm ci'
          }
        }
      }
    }

    stage('Lint and Type Check') {
      steps {
        echo '>>> Running Lint and Type Check...'
        script {
          if (isUnix()) {
            sh 'npm run lint'
            sh 'npx tsc -b --pretty false'
          } else {
            bat 'npm run lint'
            bat 'npx tsc -b --pretty false'
          }
        }
      }
    }

    stage('Run Tests') {
      steps {
        echo '>>> Running Unit Tests (optional)...'
        // Only runs if a test script exists in package.json
        script {
          if (isUnix()) {
            sh 'npm run --if-present test -- --ci'
          } else {
            bat 'npm run --if-present test -- --ci'
          }
        }
      }
      post {
        success {
          // Publish JUnit reports if present (non-fatal when empty)
          junit testResults: '**/test-results.xml', allowEmptyResults: true
        }
      }
    }

    stage('Build Production') {
      steps {
        echo '>>> Building production bundle (Vite build)...'
        script {
          if (isUnix()) {
            sh 'npm run build'
          } else {
            bat 'npm run build'
          }
        }
      }
      post {
        success {
          archiveArtifacts artifacts: 'dist/**', fingerprint: true
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
    success {
      echo '✓ Build and checks succeeded.'
    }
    failure {
      echo '✗ Build or checks failed.'
    }
  }
}
