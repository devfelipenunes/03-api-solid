import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repositories/check-ins-repository";
import { GymsRepository } from "@/repositories/gyms-repository";

interface FetchUserCheckInHistoryUseCaseRequest {
  userId: string;
  page: number;
}

interface FetchUserCheckInHistoryUseCaseResponse {
  checkIns: CheckIn[];
}

export class FetchUserCheckInHistoryUseCase {
  constructor(
    private checkInsRepository: CheckInsRepository,
    private gymsRepository?: GymsRepository
  ) {}

  async execute({
    userId,
    page,
  }: FetchUserCheckInHistoryUseCaseRequest): Promise<FetchUserCheckInHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page
    );

    return {
      checkIns,
    };
  }
}
