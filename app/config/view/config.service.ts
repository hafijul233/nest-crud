import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class ViewConfigService {
  constructor(private configService: ConfigService) {}

  get assetPath(): string {
    return this.configService.get<string>('view.assetPath');
  }
  get viewPath(): string {
    return this.configService.get<string>('view.viewPath');
  }

  get templateEngine(): string {
    return this.configService.get<string>('view.templateEngine');
  }
}
