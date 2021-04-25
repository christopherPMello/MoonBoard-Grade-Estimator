FROM python:3.8

WORKDIR /usr/src/app

RUN pip install --upgrade pip && pip install pipenv

COPY Pipfile* ./

RUN pipenv lock --keep-outdated --requirements > requirements.txt && pip install --no-cache-dir -r requirements.txt
RUN rm -rf requirements.txt Pipfile 

COPY ./server* ./server
COPY cnnDict.pt ./

WORKDIR /usr/src/app/server

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
