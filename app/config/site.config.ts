import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  /*
  |--------------------------------------------------------------------------
  | Application Name
  |--------------------------------------------------------------------------
  |
  | This value is the name of your application. This value is used when the
  | framework needs to place the application's name in a notification or
  | any other location as required by the application or its packages.
  |
  */

  slogan:
    process.env.APP_SLOGAN || 'Mobile-only remittance service for the migrants',
  address: process.env.APP_ADDRESS || '',
  address_br: process.env.APP_ADDRESS_BR || '',
  meta_content: process.env.APP_META_CONTENT || '',
  meta_keywords:
    process.env.APP_META_KEYWORDS ||
    'MyCash,money,mobile,remittance,service,migrants,MyCash money,mobile-only remittance service,remittance service,mobile-only remittance service for the migrants,md ariful haque,ariful haque,arif,haque',
  meta_description:
    process.env.APP_META_DESCRIPTION ||
    'MyCash Money: Mobile-only remittance service for the migrants',
  meta_author: process.env.APP_META_AUTHOR || 'MD ARIFUL HAQUE',
  report_image: process.env.APP_REPORT_IMAGE || '',
  report_pdf_image: process.env.APP_REPORT_PDF_IMAGE || '',
  login_image: process.env.APP_LOGIN_IMAGE || 'mycash-logo-1.png',
  side_bar_image: process.env.APP_SIDE_BAR_IMAGE || 'mycash-logo-mini-sm.png',
  theme: process.env.APP_THEME || 'light2',
  login_theme: process.env.APP_LOGIN_THEME || 'login-3',
  error_theme: process.env.APP_ERROR_THEME || '404-1',
  site_copy_right: process.env.APP_SITE_COPY_RIGHT || 'MyCash Money',
  default_image:
    process.env.APP_DEFAULT_IMAGE || 'https://placehold.it/90x90/007F7B/FFFFFF',
  permission_pin: process.env.PERMISSION_PIN || 'yes', //pin=yes and password=no
  /*
	|--------------------------------------------------------------------------
	| Application Name
	|--------------------------------------------------------------------------
	|
	| This value determines the "name" your application is currently
	| running in. This may determine how you prefer to configure various
	| services the application utilizes. Set this in your ".env" file.
	|
	*/

  name: process.env.APP_NAME || 'MyCash Money',

  /*
	|--------------------------------------------------------------------------
	| Application Environment
	|--------------------------------------------------------------------------
	|
	| This value determines the "environment" your application is currently
	| running in. This may determine how you prefer to configure various
	| services the application utilizes. Set this in your ".env" file.
	|
	*/

  env: process.env.APP_ENV || 'local',

  /*
	|--------------------------------------------------------------------------
	| Application Debug Mode
	|--------------------------------------------------------------------------
	|
	| When your application is in debug mode, detailed error messages with
	| stack traces will be shown on every error that occurs within your
	| application. If disabled, a simple generic error page is shown.
	|
	*/

  debug: process.env.APP_DEBUG || true,

  /*
	|--------------------------------------------------------------------------
	| Application URL
	|--------------------------------------------------------------------------
	|
	| This URL is used by the console to properly generate URLs when using
	| the Artisan command line tool. You should set this to the root of
	| your application so that it is used when running Artisan tasks.
	|
	*/

  url: process.env.APP_URL || 'http://localhost',

  /*
  |--------------------------------------------------------------------------
  | Asset URL
  |--------------------------------------------------------------------------
  |
  | This URL is used by the console to properly generate URLs when using
  | the Artisan command line tool. You should set this to the root of
  | your Asset so that it is used when running Artisan tasks.
  |
  */

  asset_url: process.env.ASSET_URL || process.env.APP_URL || 'http://localhost',

  /*
	|--------------------------------------------------------------------------
	| Application Timezone
	|--------------------------------------------------------------------------
	|
	| Here you may specify the default timezone for your application, which
	| will be used by the PHP date and date-time functions. We have gone
	| ahead and set this to a sensible default for you out of the box.
	|
	*/

  timezone: process.env.APP_TIMEZONE || 'Asia/Dhaka',

  /*
	|--------------------------------------------------------------------------
	| Application Locale Configuration
	|--------------------------------------------------------------------------
	|
	| The application locale determines the default locale that will be used
	| by the translation service provider. You are free to set this value
	| to any of the locales which will be supported by the application.
	|
	*/

  locale: 'en',

  /*
	|--------------------------------------------------------------------------
	| Application Fallback Locale
	|--------------------------------------------------------------------------
	|
	| The fallback locale determines the locale to use when the current one
	| is not available. You may change the value to correspond to any of
	| the language folders that are provided through your application.
	|
	*/

  fallback_locale: 'en',

  /*
	|--------------------------------------------------------------------------
	| Faker Locale
	|--------------------------------------------------------------------------
	|
	| This locale will be used by the Faker PHP library when generating fake
	| data for your database seeds. For example, this will be used to get
	| localized telephone numbers, street address information and more.
	|
	*/

  faker_locale: 'en_US',

  /*
	|--------------------------------------------------------------------------
	| Encryption Key
	|--------------------------------------------------------------------------
	|
	| This key is used by the Illuminate encrypter service and should be set
	| to a random, 32 character string, otherwise these encrypted strings
	| will not be safe. Please do this before deploying an application!
	|
	*/

  key: process.env.APP_KEY || '',

  cipher: 'AES-256-CBC',
}));
