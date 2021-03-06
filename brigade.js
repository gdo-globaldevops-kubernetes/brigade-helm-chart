const devops = require("devops-brigade");
devops.Events.onPushDevelop(async () => {
  await devops.Utilities.gitVersionAsync();
  await devops.Standard.publishHelmChartAsync({ 
    chartName: "brigade", 
    helmSubFolder: "./",
    getDependencies: false,
    helmRepos: {
      "brigade": "https://brigadecore.github.io/charts"
    }
  });
});