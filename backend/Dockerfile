FROM ruby:2.6.5
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install
COPY . .
EXPOSE 3001
CMD ["rails", "server", "-p", "3001"]
