pipeline {
  agent {
    docker {
      image 'node:22-alpine'
      // args '-u root'
    }
  }

  options {
    timeout(time: 30, unit: 'MINUTES')
  }

  stages {
    stage('Prepare Environment') {
      steps {
        echo '>>> Installing tools inside container (apk add git)'
        // Ensure git is available for `checkout scm` within the docker agent
        sh 'apk add --no-cache git'
      }
    }

    stage('Checkout Code') {
      steps {
        echo '>>> Checking out code from SCM...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '>>> Installing dependencies (npm ci)...'
        sh 'npm ci'
      }
    }

    stage('Lint and Type Check') {
      steps {
        echo '>>> Running Lint and Type Check...'
        sh 'npm run lint'
        // TypeScript type-check using project references
        sh 'npx tsc -b --pretty false'
      }
    }

    stage('Run Tests') {
      steps {
        echo '>>> Running Unit Tests (optional)...'
        // Only runs if a test script exists in package.json
        sh 'npm run --if-present test -- --ci'
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
        sh 'npm run build'
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

