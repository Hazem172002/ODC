/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable, ParseIntPipe } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { identity } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { ticketDto } from './dto';

@Injectable()
export class CinemaControllService {
  constructor(private prisma: PrismaService) {}

  async hallShedule() {
    const time1 = await this.prisma.schedule.findMany({
      where: {
        time: 1,
      },
    });
    const time4 = await this.prisma.schedule.findMany({
      where: {
        time: 4,
      },
    });
    const time7 = await this.prisma.schedule.findMany({
      where: {
        time: 7,
      },
    });
    let hallA = [];
    let hallB = [];
    let hallC = [];
    let k = 0;
    hallA.push(time1[k]);
    hallA.push(time4[k]);
    hallA.push(time7[k]);
    k++;
    hallB.push(time1[k]);
    hallB.push(time4[k]);
    hallB.push(time7[k]);
    k++;
    hallC.push(time1[k]);
    hallC.push(time4[k]);
    hallC.push(time7[k]);

    for (let i = 0; i < 3; i++) {
      const data = await this.prisma.hallA.create({
        data: {
          adult: hallA[i].adult,
          backdrop_path: hallA[i].backdrop_path,
          Ids: hallA[i].Ids,
          original_language: hallA[i].original_language,
          original_title: hallA[i].original_title,
          overview: hallA[i].overview,
          popularity: hallA[i].popularity,
          poster_path: hallA[i].poster_path,
          release_date: hallA[i].release_date,
          title: hallA[i].title,
          video: hallA[i].video,
          vote_average: hallA[i].vote_average,
          vote_count: hallA[i].vote_count,
          time: hallA[i].time,
        },
      });
    }
    for (let i = 0; i < 3; i++) {
      const data = await this.prisma.hallB.create({
        data: {
          adult: hallB[i].adult,
          backdrop_path: hallB[i].backdrop_path,
          Ids: hallB[i].Ids,
          original_language: hallB[i].original_language,
          original_title: hallB[i].original_title,
          overview: hallB[i].overview,
          popularity: hallB[i].popularity,
          poster_path: hallB[i].poster_path,
          release_date: hallB[i].release_date,
          title: hallB[i].title,
          video: hallB[i].video,
          vote_average: hallB[i].vote_average,
          vote_count: hallB[i].vote_count,
          time: hallB[i].time,
        },
      });
    }
    for (let i = 0; i < 3; i++) {
      const data = await this.prisma.hallC.create({
        data: {
          adult: hallC[i].adult,
          backdrop_path: hallC[i].backdrop_path,
          Ids: hallC[i].Ids,
          original_language: hallC[i].original_language,
          original_title: hallC[i].original_title,
          overview: hallC[i].overview,
          popularity: hallC[i].popularity,
          poster_path: hallC[i].poster_path,
          release_date: hallC[i].release_date,
          title: hallC[i].title,
          video: hallC[i].video,
          vote_average: hallC[i].vote_average,
          vote_count: hallC[i].vote_count,
          time: hallC[i].time,
        },
      });
    }
  }
  async ticket(dto: ticketDto, req) {
    if (!dto.ids) throw new ForbiddenException('ids?');
    if (!dto.seat) throw new ForbiddenException('seat?');
    if (!dto.time) throw new ForbiddenException('time?');
    let check = false;
    if (
      dto.seat[0] >= 'a' &&
      dto.seat[0] <= 'e' &&
      parseInt(dto.seat[1]) >= 0 &&
      parseInt(dto.seat.slice(1)) <= 10
    )
      check = true;

    try {
      const hallA = await this.prisma.hallA.findFirst({
        where: {
          Ids: +dto.ids,
          time: +dto.time,
        },
      });

      const hallB = await this.prisma.hallB.findFirst({
        where: {
          Ids: +dto.ids,
          time: +dto.time,
        },
      });
      const hallC = await this.prisma.hallC.findFirst({
        where: {
          Ids: +dto.ids,
          time: +dto.time,
        },
      });

      if (hallA) {
        if (hallA.tickets) {
          const seat = await this.prisma.seatsA.findFirst({
            where: {
              hall_id: hallA.id,
              seat: dto.seat,
            },
          });

          if (!seat && check == true) {
            await this.prisma.seatsA.create({
              data: {
                hall_id: hallA.id,
                seat: dto.seat,
              },
            });

            const ticket = await this.prisma.tickets.create({
              data: {
                user_id: req.user['id'],
                film_name: hallA.title,
                time: hallA.time,
              },
            });
            await this.prisma.hallA.updateMany({
              where: {
                Ids: +dto.ids,
                time: +dto.time,
              },
              data: {
                tickets: --hallA['tickets'],
              },
            });
            delete ticket.id;
            delete ticket.user_id;
            return {
              ticket: ticket,
              hall: 'hall-A',
            };
          }
        }
      } else if (hallB) {
        if (hallB.tickets) {
          const seat = await this.prisma.seatsB.findFirst({
            where: {
              hall_id: hallB.id,
              seat: dto.seat,
            },
          });

          if (!seat && check == true) {
            await this.prisma.seatsB.create({
              data: {
                hall_id: hallB.id,
                seat: dto.seat,
              },
            });
            const ticket = await this.prisma.tickets.create({
              data: {
                user_id: req.user['id'],
                film_name: hallB.title,
                time: hallB.time,
              },
            });
            await this.prisma.hallB.updateMany({
              where: {
                Ids: +dto.ids,
                time: +dto.time,
              },
              data: {
                tickets: --hallB['tickets'],
              },
            });
            delete ticket.id;
            delete ticket.user_id;
            return {
              ticket: ticket,
              hall: 'hall-B',
            };
          }
        }
      } else if (hallC) {
        if (hallC.tickets) {
          const seat = await this.prisma.seatsC.findFirst({
            where: {
              hall_id: hallC.id,
              seat: dto.seat,
            },
          });

          if (!seat && check == true) {
            await this.prisma.seatsC.create({
              data: {
                hall_id: hallC.id,
                seat: dto.seat,
              },
            });
            const ticket = await this.prisma.tickets.create({
              data: {
                user_id: req.user['id'],
                film_name: hallC.title,
                time: hallC.time,
              },
            });
            await this.prisma.hallC.updateMany({
              where: {
                Ids: +dto.ids,
                time: +dto.time,
              },
              data: {
                tickets: --hallC['tickets'],
              },
            });
            delete ticket.id;
            delete ticket.user_id;
            return {
              ticket: ticket,
              hall: 'hall-C',
            };
          }
        }
      } else {
        throw new ForbiddenException('bad');
      }
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
      throw error;
    }
  }
  async hallA() {
    return this.prisma.seatsA.findMany();
  }
  async hallB() {
    return this.prisma.seatsB.findMany();
  }
  async hallC() {
    return this.prisma.seatsC.findMany();
  }
  async myTickets(req) {
    return await this.prisma.tickets.findMany({
      where: {
        user_id: req.user['id'],
      },
      select: {
        film_name: true,
        Date: true,
        price: true,
        time: true,
      },
    });
  }
  async search(dto) {
    const res = this.prisma.nowPlaying.findMany({
      where: {
        original_title: {
          contains: dto.title,
        },
      },
    });
    return res;
  }
}
