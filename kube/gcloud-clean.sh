#!/bin/bash
gcloud container clusters delete sky-note --zone us-central1-c
gcloud container images delete gcr.io/kubernetes-practice-293800/sky-note:v1