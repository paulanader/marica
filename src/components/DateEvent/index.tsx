/* eslint-disable camelcase */

import { EventType } from '../../@types/EventType';
import { Margin } from './styles';

interface IDateEventProps {
    event: EventType;
}

export const DateEvent: React.FC<IDateEventProps> = ({ event }) => {
    const dataHourStartString = event.datahora_inicio_f.split('T');
    const dataStart = dataHourStartString[0].split('-');
    const hourStart = dataHourStartString[1].split(':');
    const dataHourEndString = event.datahora_fim_f.split('T');
    const dataEnd = dataHourEndString[0].split('-');
    const hourEnd = dataHourEndString[1].split(':');

    const arrayMonth = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];

    return (
        <div className="card-body d-flex mb-3">
            <div className="mr-3">
                <div className="text-center">
                    <p className="text-danger text-uppercase mb-0">
                        {arrayMonth[parseInt(dataStart[1], 10) - 1].slice(0, 3)}
                    </p>
                    <p className="text-dark">{parseInt(dataStart[2], 10)}</p>
                </div>
            </div>
            <Margin className="px-3">
                <p>
                    {`De: ${parseInt(dataStart[2], 10)} de ${
                        arrayMonth[parseInt(dataStart[1], 10) - 1]
                    } de ${dataStart[0]}, às ${parseInt(hourStart[0], 10)}:${
                        hourStart[1]
                    }h `}
                </p>

                {event.datahora_fim_f && (
                    <p>
                        {`Até: ${parseInt(dataEnd[2], 10)} de ${
                            arrayMonth[parseInt(dataEnd[1], 10) - 1]
                        } de ${dataStart[0]}, às ${parseInt(hourEnd[0], 10)}:${
                            hourEnd[1]
                        }h `}
                    </p>
                )}
            </Margin>
        </div>
    );
};
