/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1581601222236_8881';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql',
      // 这里也可以通过 .env 文件注入环境变量，然后通过 process.env 获取
      host: 'localhost',
      port: '3306',
      database: 'egg_admin_system',
      username: 'root',
      password: '12345678',
    },
    jwt: {
      secret: 'EGG_ADMIN_SYSTEM_SECRET',
      enable: true,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
