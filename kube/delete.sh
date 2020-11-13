#!/bin/bash
kubectl delete -f kube/deployment-manifest.yaml
kubectl delete -f kube/service-manifest.yaml