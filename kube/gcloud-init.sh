#!/bin/bash
export GCLOUD_PROJECT_ID=kubernetes-practice-293800
export MY_ZONE=us-central1-c
gcloud builds submit --tag gcr.io/${GCLOUD_PROJECT_ID}/sky-note:v1 .
gcloud container clusters create sky-note \
  --num-nodes 1 \
  --enable-basic-auth \
  --issue-client-certificate \
  --zone ${MY_ZONE}