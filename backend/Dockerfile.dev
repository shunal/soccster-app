FROM ruby:2.6.5
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs

RUN mkdir -p /app
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install --jobs 20 --retry 5
COPY . ./
EXPOSE 3001
CMD ["bundle", "exec", "rails", "server", "-p", "3001" "-b", "0.0.0.0"]
