import { Controller, Get, Render } from '@nestjs/common'

@Controller('service')
export class ServiceController {
  @Get()
  @Render('service/index')
  public index() {
    return { message: 'hello' }
  }
}
