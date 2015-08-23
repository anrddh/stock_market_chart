Stock.controller("mainController", function($scope, $http) {
    $scope.labels = [];
    $scope.data = [];
    $scope.series = [];

    $scope.DelData = [];
    $scope.DelSeries = [];

    for(i = 1; i < 61; i++) {
        $scope.labels.push(i);
    }

    url = "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json?column_index=4";
    delete $http.defaults.headers.common['X-Requested-With'];
    $http.get(url)
        .success(function(data) {
            var dataSet = data.dataset.data.slice(0, 60).map(function(item) { return item[1]; });
            $scope.data.push(dataSet);
            $scope.series.push("APPL");
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.addStock = function() {
        if($scope.DelSeries.indexOf($scope.stock) !== -1) {
            var index = $scope.DelSeries.indexOf($scope.stock);

            $scope.data.push($scope.DelData[index]);
            $scope.series.push($scope.DelSeries[index]);

            $scope.DelData.splice(index, 1);
            $scope.DelSeries.splice(index, 1);

            $scope.stock = "";
        } else {
            $http.get('/api/stock/' + $scope.stock)
                .success(function(data) {
                    var dataSet = data.data.slice(0, 60);
                    dataSet = dataSet.map(function(item) {
                        return item[4];
                    });
                    $scope.data.push(dataSet);
                    $scope.series.push($scope.stock);
                    $scope.stock = '';
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }
    }

    $scope.removeStock = function(stock) {
        var index = $scope.series.indexOf(stock);

        $scope.DelData.push($scope.data[index]);
        $scope.DelSeries.push($scope.series[index]);

        $scope.data.splice(index, 1);
        $scope.series.splice(index, 1);
    }
});