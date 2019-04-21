FROM microsoft/dotnet:2.2-sdk AS build-env
WORKDIR /app

# copy csproj and restore as distinct layers

RUN mkdir -p IdentityServerAspNetIdentity
# RUN mkdir -p Infrastructure

#Copy solution file as well as projects
# COPY ./*.sln .
COPY ./IdentityServerAspNetIdentity/IdentityServerAspNetIdentity.csproj ./IdentityServerAspNetIdentity
RUN dotnet restore ./IdentityServerAspNetIdentity/IdentityServerAspNetIdentity.csproj
RUN ls -l ./

# RUN dotnet restore
# copy and publish app and libraries
COPY . ./
RUN dotnet publish -c Release -o out ./IdentityServerAspNetIdentity/

#Create running docker image
FROM microsoft/dotnet:2.2-aspnetcore-runtime AS runtime
WORKDIR /app
COPY --from=build-env /app/IdentityServerAspNetIdentity/out .
EXPOSE 5000/tcp
ENTRYPOINT ["dotnet", "IdentityServerAspNetIdentity.dll"]