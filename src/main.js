const electron = require('electron');
const app = electron.app; // アプリケーション作成用モジュールをロード
const BrowserWindow = electron.BrowserWindow;
const crashReporter = electron.crashReporter;

//	クラッシュレポート
crashReporter.start({
    productName: 'EleTwi',
    companyName: '',
    submitURL: 'http://hoge.hoge',
    autoSubmit: true
})

var mainWindow = null;

// 全てのウィンドウが閉じたらアプリケーションを終了します。
app.on('window-all-closed', function() {
    app.quit();
});

// アプリケーションの初期化が完了したら呼び出されます。
app.on('ready', function() {
    // メインウィンドウを作成します。
    mainWindow = new BrowserWindow({ width: 800, height: 540 });

    // メインウィンドウに表示するURLを指定します。
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // メインウィンドウが閉じられたときの処理
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
