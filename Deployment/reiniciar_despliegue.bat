@echo off
echo Iniciando Minikube...
minikube start
echo Eliminando todos los servicios...
kubectl delete --all services
echo Eliminando todos los deployments...
kubectl delete --all deployments
echo Eliminando todos los replicasets...
kubectl delete --all replicasets
echo Eliminando todos los pods...
kubectl delete --all pods
echo Eliminando todos los ingresses...
kubectl delete --all ingresses
echo Eliminando todos los jobs...
kubectl delete --all jobs
echo Eliminando todos los cronjobs...
kubectl delete --all cronjobs
echo Reiniciando todos los elementos...
kubectl apply -f .
echo.
echo --------------------------------------- LISTA DE PODS CREADOS: --------------------------------------- 
kubectl get pods
echo ------------------------------------------------------------------------------------------------------ 
echo.
echo Creando puente de conexiones entre el host local y el cluster...
minikube tunnel