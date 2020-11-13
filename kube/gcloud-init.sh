#!/bin/bash
export PROJECT_ID=${gcloud config get-value project}
gcloud builds submit --tag gcr.io/${PROJECT_ID}/sky_note .
gcloud container clusters create sky_note \
  --num-nodes 1 \
  --enable-basic-auth \
  --issue-client-certificate \
  --zone us-central1-c