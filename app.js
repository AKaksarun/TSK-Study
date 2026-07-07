const version = "v1.1";

document.getElementById("version").innerHTML = version;

function deploy(){

document.getElementById("message").innerHTML =

"✅ Deployment Successful! GitHub Actions triggered a new deployment and the latest Docker container is now running on Amazon EC2.";

}