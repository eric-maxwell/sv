'use strict';

angular.module('sv')
 .controller('DropboxCtrl', function ($scope, Dropbox) {

    // assign a promise to scope
    $scope.accountInfo = Dropbox.accountInfo();

    // or use callbacks
   // Dropbox.copy('dir/image1.jpg', 'dir/image2.jpg').then(function (res) {
   //     Dropbox.move('dir/image1.jpg', 'dir/image.jpg').then(function (res) {
   //         $scope.photos = Dropbox.stat('dir');
   //     });
   // });

});/**
 * Created by ermaxw on 6/11/15.
 */
