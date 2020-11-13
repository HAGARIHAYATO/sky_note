#!/bin/bash
gcloud container clusters delete sky-note --zone ${MY_ZONE}
gcloud container images delete gcr.io/kubernetes-practice-293800/sky-note