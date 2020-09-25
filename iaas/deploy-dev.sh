#!/bin/bash

set -e

sam package --s3-bucket backent-dev-test --template-file pipeline.yml
sam deploy --s3-bucket backent-dev-test --stack-name backend-test \
  --template-file pipeline.yml --capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
  --parameter-overrides \
    env=dev \
    nodeEnv=development \
    branch=develop \
    vpcSecurityGroupIds="sg-04d4376ab9eccd7e9" \
    vpcSubnetIds="subnet-04d90ccf2cdc37f35,subnet-0cbcaffb2f32401dd"
