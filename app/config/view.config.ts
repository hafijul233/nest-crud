import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('view', () => ({
  /*
  |--------------------------------------------------------------------------
  | View Storage Paths
  |--------------------------------------------------------------------------
  |
  | Most templating systems load templates from disk. Here you may specify
  | an array of paths that should be checked for your views. Of course
  | the usual Laravel view path has already been registered for you.
  |
  */

  view: join(__dirname, '..', '..', 'resources', 'views'),

  /*
	|--------------------------------------------------------------------------
	| View Template Engine
	|--------------------------------------------------------------------------
	|
	| Most templating systems load templates from disk. Here you may specify
	| an array of paths that should be checked for your views. Of course
	| the usual Laravel view path has already been registered for you.
	|
	*/

  engine: 'liquid',

  /*
	|--------------------------------------------------------------------------
	| View Template Engine Options
	|--------------------------------------------------------------------------
	|
	| Most templating systems load templates from disk. Here you may specify
	| an array of paths that should be checked for your views. Of course
	| the usual Laravel view path has already been registered for you.
	|
	*/

  options: {},
}));
