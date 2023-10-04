import { Controller, Get, Render } from '@nestjs/common'

@Controller('price-table')
export class PriceTableController {
  @Get()
  @Render('priceTable/index')
  public index() {
    return { message: 'hello' }
  }
}
